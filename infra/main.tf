provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "quant_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.medium"
  key_name      = "quant-key"

  tags = {
    Name = "QuantGenius-Server"
  }
}