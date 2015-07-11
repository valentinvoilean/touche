window.ActorsSchema = {
  "apiVersion":     "1.0",
  "swaggerVersion": "1.2",
  "apis":           [{
    "path":           "/default/actors",
    "description":    "Operations related to actors",
    "apiDeclaration": {
      "apiVersion":     "1.0",
      "swaggerVersion": "1.2",
      "basePath":       "http://test.gotouche.com/rest/actors/",
      "resourcePath":   "/rest/actors",
      "produces":       ["application/json"],
      "apis":           [{
        "path":        "/rest/actors",
        "description": "getActors",
        "operations":  [{
          "method":           "GET",
          "summary":          "Loads the actors",
          "notes":            "Loads the actor list, including the actor information an his most popular shows/movies. It can be full loaded, or paginated.",
          "type":             "ResponseEntity«AndroidResponse»",
          "nickname":         "getActors",
          "produces":         ["application/json"],
          "parameters":       [{
            "name":          "page",
            "description":   "The page that will be retrieved, starting from 1",
            "defaultValue":  "",
            "required":      false,
            "type":          "integer",
            "format":        "int32",
            "paramType":     "query",
            "allowMultiple": false
          }],
          "responseMessages": [{
            "code":          200,
            "message":       "The request was successful, and the body contains the response",
            "responseModel": "ResponseEntity«AndroidResponse»"
          }, {"code": 403, "message": "Forbidden"}, {
            "code":          400,
            "message":       "The request is invalid. The page value probably is out of the valid range",
            "responseModel": "Void"
          }, {"code": 401, "message": "Unauthorized"}, {"code": 404, "message": "Not Found"}],
          "deprecated":       "false"
        }]
      }],
      "models":         {
        "ResponseEntity«AndroidResponse»": {
          "id":          "ResponseEntity«AndroidResponse»",
          "description": "",
          "extends":     "",
          "properties":  {
            "statusCode": {
              "type": "string",
              "enum": ["100", "101", "102", "103", "200", "201", "202", "203", "204", "205", "206", "207", "208", "226", "300", "301", "302", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "426", "428", "429", "431", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511"]
            }, "body":    {"$ref": "AndroidResponse"}, "headers": {"$ref": "HttpHeaders"}
          }
        },
        "Actor":                           {
          "id":          "Actor",
          "description": "",
          "required":    ["identifier", "description", "adult", "top", "popularity", "name", "location"],
          "extends":     "",
          "properties":  {
            "identifier":  {
              "type":        "integer",
              "format":      "int32",
              "description": "Identifier of the actor"
            },
            "description": {"type": "string", "description": "The description field of the actor"},
            "adult":       {"type": "boolean", "description": "If the actor is an adult"},
            "top":         {"type": "boolean", "description": "Whether the actor is top"},
            "popularity":  {
              "type":        "number",
              "format":      "double",
              "description": "The popularity value of th eactor"
            },
            "name":        {"type": "string", "description": "The name of the actor"},
            "location":    {"type": "string", "description": "The location of the actor"}
          }
        },
        "AndroidResponse":                 {
          "id":          "AndroidResponse",
          "description": "",
          "extends":     "",
          "properties":  {
            "totalElements": {
              "type":        "integer",
              "format":      "int32",
              "description": "The total number of actors in the system"
            },
            "data":          {
              "type":        "array",
              "description": "The list of the requested actors",
              "items":       {"$ref": "Actor"}
            }
          }
        }
      }
    }
  }],
  "info":           {
    "title":             "default Title",
    "description":       "Api Description",
    "termsOfServiceUrl": "Api terms of service",
    "contact":           "Contact Email",
    "license":           "Licence Type",
    "licenseUrl":        "License URL"
  }
};
