package main

import (
	"log"
	"net/http"
)

func main() {
	s := &http.Server{
		Addr: ":8080",
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		clientIP := r.RemoteAddr
		log.Println("Request received from IP:", clientIP)
		w.Write([]byte("Hello from go server"))
	})

	log.Fatal(s.ListenAndServe())
}
