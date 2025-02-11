import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
	FooterContainer,
	FooterWrap,
	FooterLink,
	FooterLinkItems,
	FooterLinksContainer,
	FooterLinkTitle,
	FooterLinksWrapper,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights,
} from './FooterElements';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us</FooterLinkTitle>
							<FooterLink to='/'>How it works</FooterLink>
							<FooterLink to='/'>Testimonials</FooterLink>
							<FooterLink to='/'>Career</FooterLink>
							<FooterLink to='/'>Investors</FooterLink>
							<FooterLink to='/'>Term of services</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact us</FooterLinkTitle>
							<FooterLink to='/'>Contact</FooterLink>
							<FooterLink to='/'>Support</FooterLink>
							<FooterLink to='/'>Destinations</FooterLink>
							<FooterLink to='/'>Sponsorships</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>
							<FooterLink to='/'>Submit Video</FooterLink>
							<FooterLink to='/'>Ambassadors</FooterLink>
							<FooterLink to='/'>Agency</FooterLink>
							<FooterLink to='/'>Influencer</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social media</FooterLinkTitle>
							<FooterLink to='/'>Instagram</FooterLink>
							<FooterLink to='/'>Facebook</FooterLink>
							<FooterLink to='/'>Youtube</FooterLink>
							<FooterLink to='/'>Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							dolla
						</SocialLogo>
						<WebsiteRights>
							dolla © {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href='/' target='_blank' aria-label='Facebook'>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Instagram'>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Youtube'>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Twitter'>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
