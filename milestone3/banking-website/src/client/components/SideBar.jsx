import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from '../../themes';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { CiMoneyBill, CiCreditCard2 } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { TbTransferOut } from "react-icons/tb";
import { AiFillBug, AiOutlineTransaction } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";

import logo from '../../assets/logo.png'
import loanimg from '../../assets/loanimg.svg'
import billimg from '../../assets/billimg.svg'
import transferimg from '../../assets/transferimg.svg'
import transactionimg from '../../assets/transactionsimg.svg'
import React from 'react';
const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const ClientSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 0.2px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="center"
                                ml="15px"
                            >
                                {/* <Typography variant="h3" color={colors.grey[100]}>
                                    SideBar
                                </Typography> */}
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="15px" display="flex" alignItems="center" justifyContent="center">
                            <img style={{ width: '50px', height: '50px', marginRight: '10px' }} src={logo} alt='404 bank' />
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    404 Bank
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title={isCollapsed ? "" : "Home"}
                            to=""
                            icon={<HomeOutlinedIcon size={selected === 'Home' ? 50 : 20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? "" : "Transaction History"}
                            to="transactionHistory"
                            icon={<AiOutlineTransaction size={selected === 'Transactions History' ? 50 : 20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? "" : "Accounts"}
                            to="accounts"
                            icon={<AccountBalanceOutlinedIcon size={selected === 'Accounts' ? 50 : 20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? "" : "Bills"}
                            to="bill"
                            icon={<CiMoneyBill size={selected === 'Bills' ? 50 : 20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? "" : "Loans"}
                            to="loan"
                            icon={<GiReceiveMoney size={selected === 'Loans' ? 50 : 20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? "" : "Transfers"}
                            to="transfer"
                            icon={<TbTransferOut size={selected === 'Transfer' ? 50 : 20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? "" : "Applications"}
                            to="applications"
                            icon={<ListAltOutlinedIcon size={selected === 'Transfer' ? 50 : 20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? "" : "Credit Cards"}
                            to="creditCards"
                            icon={<CiCreditCard2 size={selected === 'Credit Cards' ? 50 : 20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={isCollapsed ? "" : "Report Technical Issues"}
                            to="reportTechnicalIssues"
                            icon={<AiFillBug size={selected === 'Report technical issues' ? 50 : 20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                    
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default ClientSidebar;
