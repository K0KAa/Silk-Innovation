import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import { Avatar, Switch, TextField, FormControl, Select,MenuItem } from '@material-ui/core';

const Header = ({handleSidebar}) => {

    return (
        <HeaderWrapper>
            <div className="headerLeft">
                <MenuIcon  className="burger"  onClick={handleSidebar}/>
                
                <TextField id="standard-basic" placeholder="Search" style={{marginRight: "1rem"}}/>
                
                <FormControl className="dropDown">
                    <Select
                        displayEmpty
                        defaultValue ="None"
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem>
                        None
                    </MenuItem>
                    <MenuItem value={10} selected>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FullscreenExitIcon />
            </div>

            <div className="headerMiddle">
                Sajilo <span className="logoStyle">Pay</span>
            </div>
            <div className= "headerRight">
                <Switch />
                <div className="wallet">
                    <i>Wallet Balance</i>
                    <b>Rs 9414.32</b>
                </div>
                
                <div className="avatar">
                    <p>Kushal Kattel</p>
                    <Avatar />
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header


const HeaderWrapper = styled.nav `
    position: sticky;
    position: --webkit-sticky;
    height: 4rem;
    display: flex;
    
    justify-content: space-between;
    border-bottom: 3px solid grey;
    margin:0rem 1rem 0rem 1rem;
    .headerLeft{
        margin-top: 0px;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem
    }
    .headerMiddle{
        display: flex;
        justify-content: center;
        align-items: center
    }
    .headerRight{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .avatar{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1rem
    }

    .dropDown{
        margin-right:10px;
    }

    .burger{
        cursor: pointer;
        margin-right: 1rem;
    }

    .logoStyle {
        border-radius: 999px;
        background: aqua;
        width: 3rem;
        height: 3rem;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .wallet{
        margin: 0px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
