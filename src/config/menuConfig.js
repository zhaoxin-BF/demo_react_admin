/*
动态生成menuList 动态生成路由菜单
 */
//     AppstoreOutlined,
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     PieChartOutlined,
//     DesktopOutlined,
//     ContainerOutlined,
//     MailOutlined,
import React from 'react'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AreaChartOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,

    HomeOutlined,                          //home    页面图标
    VerticalAlignTopOutlined,              //upload  上传资源
    CopyrightCircleOutlined,               //check   审核资源
    UsergroupAddOutlined,                  //user    用户图标
} from '@ant-design/icons';

const menuList = [
//     {
//         title: '资源查询',
//         key: '/search',
//         icon: <AppstoreOutlined />,
//     },
    {
        title: '首页概览',
        key: '/home',
        icon: <AreaChartOutlined />,
    },
    {
        title: '块存储',
        key: '/upload',
        icon: <VerticalAlignTopOutlined />,
    },
    {
        title: '文件存储',
        key: '/check',
        icon: <CopyrightCircleOutlined />,
    },
    {
        title: '资源管理',
        key: '/user',
        icon: <UsergroupAddOutlined />,
    },
    {
        title: '监控告警',
        key: '/monitor',
        icon: <MailOutlined/>,
        children: [ //子菜单列表
            {
                title: '监控设置',
                key: '/monitor/monitor',
                icon: <ContainerOutlined/>
            },
            {
                title: '告警设置',
                key: '/monitor/alarm',
                icon: <DesktopOutlined/>
            },
            {
                title: '通知人',
                key: '/monitor/user',
                icon: <ContainerOutlined/>
            },
        ]
    },
    {
        title: '系统配置',
        key: '/setting',
        icon: <PieChartOutlined/>,
        children: [ //子菜单列表
            {
                title: '授权管理',
                key: '/setting/auth',
                icon: <ContainerOutlined/>
            },
            {
                title: '系统设置',
                key: '/setting/system',
                icon: <DesktopOutlined/>
            },

        ]
    }
]

export default menuList