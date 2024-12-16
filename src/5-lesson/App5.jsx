import {Wrapper } from "./style"
import{Badge,Button} from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';

const App5 = () =>{
    return (
        <Wrapper>
            <Wrapper.Left>
                <img src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"/>

            </Wrapper.Left>
            <Wrapper.Middle>
                <Wrapper.Middle.Item>Home</Wrapper.Middle.Item>
                <Wrapper.Middle.Item>Shop</Wrapper.Middle.Item>
                <Wrapper.Middle.Item>Plant Care</Wrapper.Middle.Item>
                <Wrapper.Middle.Item>Blogs</Wrapper.Middle.Item>
            </Wrapper.Middle>
            <Wrapper.Right>
            <Badge dot>
              <ShoppingCartOutlined className="icon" />
            </Badge>

                <Button type="primary">Login</Button>
            </Wrapper.Right>
        </Wrapper>
    );
}

export default App5