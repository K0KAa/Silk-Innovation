import React from 'react'
import Header from './Header'
import SidebarRight from './SidebarRight'
import SidebarLeft from './SidebarLeft'
import Main from './Main'
import styled from "styled-components"

import { connect } from 'react-redux'
import { addUsers } from '../redux/actions'
import PropTypes from "prop-types"

const Dashboard = ({addUsers}) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(true)

    React.useEffect(()=>{
        addUsers()
       
    },[])
    var user = JSON.parse(localStorage.getItem('user'))
    const handleSidebar = () =>{
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <>
            <Header handleSidebar={handleSidebar}  user={user} />
            <DashboardWrapper>
            <div className="left">
                <SidebarLeft sidebaropen ={sidebarOpen}/>
            </div>
            <div className="center">
                <Main />
            </div>
            <div className="right">
                <SidebarRight/>
            </div>
            </DashboardWrapper>
        </>
    )
}


//export default Dashboard
export default connect(null, {addUsers})(Dashboard)


const DashboardWrapper = styled.section `
    display: flex;
    justify-content: space-between;
    margin-right: 0px;
    background: rgb(230,230,230);
    .left{
        width: 4rem;
        display:flex;
    }
    .middle{
       flex:  2;
        width:60%;
        display:flex;
    }
    .right{
        display:flex;
        flex:  0.7;
    }
`;