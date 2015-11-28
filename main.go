package main

import (
  "log"
  "net/http"
)

func main() {
  fs := http.FileServer(http.Dir("public"))
  http.Handle("/", fs)

  // declared variable port for logging below
  port := ":8080"

  log.Println("Listening on localhost" + port)
  http.ListenAndServe(":8080", nil)
}
