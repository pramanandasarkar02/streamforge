package main

import (
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"

	"github.com/gin-gonic/gin"
)


var port = "8080"

type Service struct {
	Name string
	URL string
	RequiresAuth bool
}

var serviceRegistry = map[string]Service{
	"user-service": {
		Name: "User Service",
		URL: "http://localhost:8081",
		RequiresAuth: false,
	},
	"session-manager": {
		Name: "Session Manager",
		URL: "http://localhost:8082",
		RequiresAuth: true,
	},
	"stream-view-service": {
		Name: "Ingest Service",
		URL: "http://localhost:8083",
		RequiresAuth: false,
	},
	"stream-service": {
		Name: "Stream Service",
		URL: "http://localhost:8084",
		RequiresAuth: true,
	},
	"intreaction-service": {
		Name: "Intreaction Service",
		URL: "http://localhost:8085",
		RequiresAuth: false,
	},
	"notification-service": {
		Name: "Notification Service",
		URL: "http://localhost:8084",
		RequiresAuth: true,
	},
	"storage-service": {
		Name: "Storage Service",
		URL: "http://localhost:8082",
		RequiresAuth: true,
	},
	"recommendation-service": {
		Name: "Recommendation Service",
		URL: "http://localhost:8086",
		RequiresAuth: true,
	},
	
	"transcoder-service": {
		Name: "Transcoder Service",
		URL: "http://localhost:8088",
		RequiresAuth: true,
	},
	

	"chat-service": {
		Name: "Chat Service",
		URL: "http://localhost:8083",
		RequiresAuth: true,
	},

}


func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Authorization header required"})
			c.Abort()
			return 
		}

		if !strings.HasPrefix(authHeader, "Bearer ") {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid authorization header"})
			c.Abort()
			return 
		}

		token := strings.TrimPrefix(authHeader, "Bearer ")
		if token != "valid-token" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return 
		}
	}
}


func proxyHandler(service Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		targetURL, err := url.Parse(service.URL)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return 
		}

		proxy := httputil.NewSingleHostReverseProxy(targetURL)
		
		proxy.Director = func(req *http.Request) {
			req.URL.Scheme = targetURL.Scheme
			req.URL.Host = targetURL.Host
			req.URL.Path = c.Param("proxyPath")
			req.Host = targetURL.Host

			for name, values := range c.Request.Header {
				for _, value := range values {
					req.Header.Add(name, value)
				}
			}
		}

		proxy.ErrorHandler = func (rw http.ResponseWriter, req *http.Request, err error) { 
			c.JSON(http.StatusBadGateway, gin.H{"error": fmt.Sprintf("Service unavailable: %v", err)})
		}

		proxy.ServeHTTP(c.Writer, c.Request)

	}
	
}


func main() {
	router := gin.Default()

	for path, service := range serviceRegistry {
		group := router.Group(fmt.Sprintf("/api/%s", path))

		if service.RequiresAuth {
			group.Use(AuthMiddleware())
		}
		group.Any("/*proxyPath", proxyHandler(service))
	}
	

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "ok"})
	})

	
	if err := router.Run(":" + port); err != nil {
		fmt.Printf("failed to run server: %v", err)
	}
	log.Println("API Gateway listening on port http://localhost:", port)
}