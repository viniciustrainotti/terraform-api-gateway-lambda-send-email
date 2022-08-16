variable "aws_region" {
  type        = string
  description = "AWS region on which to deploy it"
  default     = "us-east-1"
}

variable "aws_profile" {
  type        = string
  description = "AWS CLI profile to use"
  default     = "viniciustrainotti"
}