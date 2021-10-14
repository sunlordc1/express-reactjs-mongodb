>API là gì?
* Đơn giản là chuẩn giao tiếp giữa client và server, client dùng API do server định nghĩa sẵn để nói cho server biết client mong muốn gì.
>Để gọi 1 API lên server có bn cách:
XHR, Fetch, Axios
* XHR ( XMLHttpRequest)
- Dùng dạng call back
- gọi hàm onload để handle kết quả ( ít xài )
* Fetch API: (cùng với xhr Fetch API là WebApi có sẵn trong trình duyệt, còn trình duyệt cũ thì lưu ý khi sử dụng)
- Dùng trong project nhỏ, đơn giản
* AXIOS 
- sử dụng được trên browser và node.js

* Tổ chức API module như thế nào?
WebApp
Api file -> HTTP client(axios,fetch,xhr) -> Server và ngược lại


> Chạy project
* ./ Tại thư mục gốc npm start
* Cài mongoDB cho máy và tạo db tên club_manager_system
* Tại thư mục client (cd client) npm start để chạy môi trường client
* package bên ngoài dành cho server, client gõ bên trong thư mục client