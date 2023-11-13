# STRUCTURE

├── docs // Các tệp OpenAPI/Swagger, tệp định nghĩa giao thức JSON schema.
├── cmd // main
├── config // Chứa cấu hình
│ ├── config.go // Biến môi trường
│ └── constants.go // Biến hằng số
├── docker-compose.yml // Cấu hình container
├── Dockerfile // Định nghĩa img container
├── domain // Lớp miền, giao diện cho lớp cơ sở dữ liệu
│ ├── entity // khai báo đối tượng
│ └── repository // interface của đối tượng
├── go.mod
├── go.sum
├── handler // Xử lý http
├── infra // Lớp cơ sở dữ liệu
│ ├── mysql
│ ├── database.go
│ ├── logger.go
│ ├── model // model cơ sở dữ liệu
│ └── repository // Repository cơ sở dữ liệu
├── logs // Chứa tệp nhật ký
├── Makefile // Các tập lệnh để thực hiện các hoạt động xây dựng, cài đặt, phân tích, v.v.
├── middlewares // Xử lý trước và sau khi xử lý yêu cầu
├── pkg // Các tiện ích cho dịch vụ
├── README.md
├── routers // Bộ định tuyến cho dịch vụ sử dụng REST API
├── scripts
└── yarn.lock // file cài đặt
