import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import SelectFlavours from './SelectFlavours';
import Header from './Header';
import Footer from './Footer';

const {Content} = Layout;

function getItem(label, key, icon, path = '/') {
  return {
    key,
    icon,
    path,
    label,
  };
}
const Customize = () => {
  const [loadings] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleSumbit = () => {
    navigate("/");
  };
  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item.key);
  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <div style={{ display: 'flex', flex: 1 }}>
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          
          <Layout>
            <Content
              style={{
                margin: '0 16px',
              }}
            >
              <div
                style={{
                  padding: 50,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                <SelectFlavours/>
              </div>
            </Content>
          </Layout>
        <Footer/>
        </Layout>
      </div>
    </div>
  );
};

export default Customize;