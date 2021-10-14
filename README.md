# API là gì?
* Đơn giản là chuẩn giao tiếp giữa client và server, client dùng API do server định nghĩa sẵn để nói cho server biết client mong muốn gì.
* Để gọi 1 API lên server có các cách:
## XHR ( XMLHttpRequest)
- Dùng dạng call back
- gọi hàm onload để handle kết quả ( ít xài )
## Fetch API: (cùng với xhr Fetch API là WebApi có sẵn trong trình duyệt, còn trình duyệt cũ thì lưu ý khi sử dụng)
- Dùng trong project nhỏ, đơn giản
## AXIOS 
- sử dụng được trên browser và node.js

# Tổ chức API module như thế nào?
* Api file -> HTTP client(axios,fetch,xhr) -> Server và ngược lại

# Lý giải
* dotenv thư viện để bạn gọi biến cục bộ process (process.env)
## JWT:
* Trong repo này sử dụng package jsonwebtoken, tham khảo library https://jwt.io/libraries
* Khi người dùng login (với thông tin tại HEADER gửi lên dữ liệu đăng nhập), thì chúng ta sẽ tìm người dùng trong db(PAYLOAD), thì chúng ta encoded lại dữ liệu người dùng đó thành 1 chuỗi token, khi người tạo 1 request nào đó hỏi dữ liệu của server, thì browser sẽ gắn chuỗi token này lên trên HEADER của request đó, và bên phía server khi nhận request sẽ tìm trong header chuỗi token và decoded  chuỗi token trả lại đúng dữ liệu (PAYLOAD) ban đầu đã được encode.
* Trong token sẽ có đoạn signature chữ kí để tăng tính sở hữu đối với server
# Chạy project
* ./ Tại thư mục gốc npm start
* Cài mongoDB cho máy và tạo db tên club_manager_system , nếu ko có thể cài trên https://cloud.mongodb.com/ rồi add vào param trong biến connectDB của file server.js
* Tại thư mục client (cd client) npm start để chạy môi trường client
* package bên ngoài dành cho server, client gõ bên trong thư mục client
# .env
PORT =3000
DB_USERNAME=databaseusername
DB_DATABASE_NAME=databasename
DB_PASSWORD=databasepasword
ACCESS_TOKEN_SECRET=yourjwtsecret