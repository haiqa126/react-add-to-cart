import React from 'react';
import { Fade } from 'react-awesome-reveal';
import '../assets/css/Catalog.css';
import logo from '../assets/images/logo.jpg';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter>
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/">
              <img style={{"width":"10px","height":"10px"}} alt="logo" src={logo} />

            </a>
            <CDBBox display="flex">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>

              <CDBBtn flat color="dark">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>

              <CDBBtn flat color="dark">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>

            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p  style={{ fontWeight: '200',fontSize:"25px" }}>
              Clothing Store
            </p>
            <CDBBox  style={{ cursor: 'pointer', padding: '0',fontSize:"16px" }}>
              <CDBFooterLink href="/">Resources</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p   style={{ fontWeight: '200',fontSize:"25px" }}>
              Help
            </p>
            <CDBBox style={{ cursor: 'pointer', padding: '0',fontSize:"16px" }}>
              <CDBFooterLink href="/">Support</CDBFooterLink>
              <CDBFooterLink href="/">Sign Up</CDBFooterLink>
              <CDBFooterLink href="/">Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
          </CDBBox>
        </CDBBox>
        <small style={{fontSize:"12px" }} >&copy; Devwares, 2020. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
