# Learning Reacjs

- Props dùng để đẩy dữ liệu từ component cha xuống component con
- Cụ thể về prop:
# Khai báo về 1 prop
> const [todoState,setTodosState] = useState([
>       {   
>            id:'todo1',
>            title:'Việc 1',
>            completed:false
>        },
>])

# Các lý giải React
- Với todoState là biến lưu trữ dữ liệu sẽ được đẩy đi các component khác hay đơn giản nó cũng sử dụng cho chính component của nó,
- setTodosState là người sửa lại dữ liệu khi có 1 tương tác hoặc điều kiện xảy ra có thể thông qua listener thay đổi (onClick,onChange,onSubmit.....).
- Sử dụng hàm setTodosState nó sẽ lưu trực tiếp biến nó được truyền vào cho todoState 
- hàm useState có thể chứa 1 string, 1 số hoặc mảng object ...
- sử dụng biến state cho value input, khi dữ liệu trên input onChange, bạn chỉ cần thay đổi state, value input thay đổi theo
- import PropTypes from 'prop-types' sử dụng nhằm mục đích kiểm tra các state được prop từ component về xem dữ liệu hợp lệ không, nếu ko hợp lệ component sẽ không được chạy
- useEffect sử dụng khi muốn đồng bộ dữ liệu khi có thay đổi đến từ useState
- Muốn useEffect chỉ render 1 lần thêm param sau là [] (chưa lý giải được giải pháp vừa nói)
# Các lý giải React Router
- Là bước sau khi bạn đã hiểu về basic React cách hoạt động



