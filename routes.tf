resource "kong_service" "react" {
  name     = "create-react-app"
  protocol = "http"
  host     = "127.0.0.1"
  port     = 3000
}


variable "basic_password" {
  type = "string"
}


resource "kong_route" "web_root" {
  protocols  = ["https", "http"]
  paths      = ["/"]
  service_id = "${kong_service.react.id}"
}

resource "kong_plugin" "react_basic_auth" {
  name        = "basic-auth"
  service_id  = "${kong_service.react.id}"

  config = {
    hide_credentials = "true"
  }
}

resource "kong_consumer" "private_access" {
  username = "private"
}

resource "kong_consumer_plugin_config" "private_access_credentials" {
  consumer_id = "${kong_consumer.private_access.username}"
  plugin_name = "basic-auth"

  config = {
    username = "private"
    password = var.basic_password
  }
}