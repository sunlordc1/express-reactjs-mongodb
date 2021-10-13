>Learning Reacjs
* Trạng thái của component : useState
- const [loginState, setLoginState] = useState('login','register');
- loginState tương ứng với login,register
- setTodoState, nếu set thêm 1 trạng thái mới 'cancel' thì loginState trở thành cancel
- Props dùng để đẩy dữ liệu từ component cha xuống component con
- Cụ thể về prop:
Khai báo về 1 prop
> const [todoState,setTodosState] = useState([
>       {   
>            id:'todo1',
>            title:'Việc 1',
>            completed:false
>        },
>])
- Với todoState là biến lưu trữ dữ liệu sẽ được đẩy đi các component khác hay đơn giản nó cũng sử dụng cho chính component của nó,
- setTodosState là người sửa lại dữ liệu khi có 1 tương tác hoặc điều kiện xảy ra có thể thông qua listener thay đổi (onClick,onChange,onSubmit.....).
- Sử dụng hàm setTodosState nó sẽ lưu trực tiếp biến nó được truyền vào cho todoState 
- hàm useState có thể chứa 1 string, 1 số hoặc mảng object ...
- sử dụng biến state cho value input, khi dữ liệu trên input onChange, bạn chỉ cần thay đổi state, value input thay đổi theo

