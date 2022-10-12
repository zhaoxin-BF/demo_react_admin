// 左侧导航栏组件

import React, {Component} from "react";
import {Link, Redirect, withRouter} from 'react-router-dom';
import './index.css'
import logo from '../../assests/images/logo.png'
import {Menu, message} from 'antd'
import menuList from '../../config/menuConfig'
import memoryUtils from "../../utils/memoryUtils";
import user from "../../pages/user/user";


const { SubMenu } = Menu;

class LeftNav extends Component {
    //根据menu 的数据生成对应的标签数组
    //使用map() + 递归调用
    // getMenuNodes = (menuList) =>{
    //     return menuList.map(item => {
    //         // {
    //         //     title: '首页',  //对应标题名称
    //         //     key: '/home',  //对应的path
    //         //     icon: <HomeOutlined />,  //可能没有
    //         //     children: [],  //可能有
    //         // }
    //         if (!item.children) {
    //             return (
    //                 <Menu.Item key={item.key}>
    //                     <Link to={item.key}>
    //                         {item.icon}
    //                         <span>{item.title}</span>
    //                     </Link>
    //                 </Menu.Item>
    //             )
    //         } else {
    //             return (
    //                 <SubMenu
    //                     key={item.key}
    //                     title={
    //                         <span>
    //                             {item.icon}
    //                             <span>{item.title}</span>
    //                         </span>
    //                     }
    //                 >
    //                 {/*递归调用显示*/}
    //                 {  this.getMenuNodes(item.children)  }
    //                 </SubMenu>
    //             )
    //         }
    //     })
    // }

    //根据menu 的数据生成对应的标签数组
    //使用reduce() + 递归调用, 可增可减

    getMenuNodes_reduce = (menuList) => {
        return menuList.reduce((pre, item) => {
            let user = memoryUtils.user.UserType
            //向pre添加<Menu.Item>
            if(!item.children) {
                if (user === 2) {                                           //如果是超级用户，给他全部的权限
                    pre.push((
                        <Menu.Item key={item.key}>
                            <Link to={item.key}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </Menu.Item>
                    ))
                }else if(user === 1){                                        //如果是管理员，给其资源查询、资源上传、资源审核权限
                    if (item.key !== "/user") {
                        pre.push((
                            <Menu.Item key={item.key}>
                                <Link to={item.key}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </Menu.Item>
                        ))
                    }
                }else {                                                      //如果是普通用户，只给资源查询和字眼上传的权限
                    if (item.key === "/home" || item.key === "/upload"){
                        pre.push((
                            <Menu.Item key={item.key}>
                                <Link to={item.key}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </Menu.Item>
                        ))
                    }
                }
            } else {
                //向pre添加<SubMen>
                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                 {item.icon}
                                 <span>{item.title}</span>
                             </span>
                        }
                    >
                    {/*递归调用显示*/}
                    {  this.getMenuNodes_reduce(item.children)  }
                    </SubMenu>
                ))
            }
            return pre
        }, [])
    }

    render() {
        //获得当前请求的的路径
        const path = this.props.location.pathname
        const openKey = path.split('/')[1]
        console.log(openKey)

        return (
            <div className="left-nav">
                <Link  className="left-nav-header" to='/' >
                    <img src={logo} alt="logo" />
                    <h1 style={{color:"white", fontSize:"18px"}}>UGFS_UDISK</h1>
                </Link>

                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={["/"+openKey]} // 默认打开子路由界面
                    mode="inline"
                    theme="dark"
                >
                {
                    this.getMenuNodes_reduce(menuList)
                }
                </Menu>
            </div>
        )
    }
}

//高阶组件
//作用：包装非路由组件，返回一个新的组件，新的组件向非路由组件传递三个属性：history/location/match
export default withRouter(LeftNav)