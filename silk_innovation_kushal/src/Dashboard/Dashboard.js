import React, {useState} from 'react'
import Header from './Header'
import SidebarRight from './SidebarRight'
import SidebarLeft from './SidebarLeft'
import Main from './Main'
import styled from "styled-components"

import { connect } from 'react-redux'
import { fetchUsers } from '../redux/actions'
import PropTypes from "prop-types"

const Dashboard = ({fetchUsers}) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(true)

    React.useEffect(()=>{
        fetchUsers()
    },[])

    const handleSidebar = () =>{
        setSidebarOpen(!sidebarOpen)
    }
    return (
        <>
            <Header handleSidebar={handleSidebar}/>
            <DashboardWrapper>
            <div className="left">
                <SidebarLeft sidebaropen ={sidebarOpen}/>
            </div>
            <div className="center">
                <Main />
            </div>
            <div className="right">
                <SidebarRight  />
            </div>
            </DashboardWrapper>
        </>
    )
}

Dashboard.propTypes ={
    fetchUsers: PropTypes.func.isRequired,
    Users: PropTypes.array.isRequired
}

const mapStateToProps = state =>{
    const {userState} = state
    const {Users} = userState
    return {
        users: Users
    }
}

//export default Dashboard
export default connect(mapStateToProps, {fetchUsers})(Dashboard)


const DashboardWrapper = styled.section `
    display: flex;
    justify-content: space-between;
    margin-right: 0px;
    background: rgb(240,240,240);
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