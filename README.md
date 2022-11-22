### Libraries

- API: axios
- Router: react-router-dom
- State Management: npm i @reduxjs/toolkit (bao gom: redux thunk), react-redux
- UI component: react-bootstrap/marterial-ui/mantine

### Foder structure

- src:

* component/:
  - dùng để tạo các common componnet, vd: Button, Header, Siderbar,....
  - thường tạo các componnent thiên về UI, không chứa các logic của ứng dụng như callApi
* mudules/`module-name`:
  - dùng để gom nhóm các component theo 1 chức năng hoặc 1 page
  - các component này thường sẽ chứa logic
* router/ :
  - dùng để định nghĩa các tác vụ liên qian đến router
* services/ :
  - dùng để chứa setup phương thức gọi API (axios) và các hàm xử lý API
* hooks/:
  - dùng để viết custom Hooks
* utils/:
  - dùng để chứa hàm được sử dụng nhiều lần
