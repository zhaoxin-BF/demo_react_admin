/*
管理组件
 */

//导入的包
import React,{Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom"                 //转发页面
import { Layout} from 'antd';                            //页面布局
import memoryUtils from '../../utils/memoryUtils'         //内存数据
import Header from '../../components/header'
import LeftNav from '../../components/leftnav'
import './admin.css'

import Home from '../home'
import Upload from '../upload/upload'
import Check from '../check/check'
import User from '../user/user'
import {Demo1} from '../dev_demo/demo1/demo1'
import Demo2 from '../dev_demo/demo2/demo2'


//全局变量
const { Footer, Sider, Content } = Layout;       //页面布局

export default class Admin extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const user = memoryUtils.user
        //从内存中读取，果内存中没有user 的信息
        if(!user || !user.UserId){
            // eslint-disable-next-line react/jsx-no-undef
            return <Redirect to='/login' />
        }
        return (
            <div>
                <Layout className='admin'>
                    <Sider
                        style={{overflow: 'auto',}}
                        collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
                    >
                        <LeftNav />
                    </Sider>
                    <Layout >
                        <Header />
                        <Content style={{margin: 15,
                            backgroundColor: '#fff'}}>
                            <Switch>
                                <Route path='/home' component={Home} />
                                <Route path='/upload' component={Upload} />
                                <Route path='/check' component={Check} />
                                <Route path='/user' component={User} />

                                <Route path='/monitor/monitor' component={Demo1} />
                                <Route path='/monitor/alarm' component={Demo1} />
                                <Route path='/monitor/user' component={Demo1} />

                                <Route path='/setting/auth' component={Demo2} />
                                <Route path='/setting/system' component={Demo2} />

                                <Redirect to='/home'/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            UGFS ©2022 Created by UDISK SRE
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}