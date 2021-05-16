import React from "react";
import theme from "theme";
import { Theme, Link, Text, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box width="100% border-box" height="600px" display="flex" justify-content="center">
			<Box
				display="flex"
				max-width="1000px"
				justify-content="center"
				flex-direction="column"
				align-items="center"
				quarkly-title="content"
			>
				<Text
					as="h1"
					font="--headline1"
					md-transform="scale(1)"
					md-filter="drop-shadow(0 0 0 transparent)"
					color="#2e36ec"
				>
					Фрилансбокс
				</Text>
				<Text
					font="--headline2"
					text-align="center"
					width="600px"
					sm-width="400px"
					sm-font="normal 900 32px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="10px 0px 16px 0px"
					md-font="normal 900 34px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
				>
					Коллекция инструментов для работы в Digital
				</Text>
				<Button
					border-radius="10px"
					color="#000000"
					font="normal 500 18px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					background="--color-secondary"
					margin="20px 0px 0px 0px"
					hover-box-shadow="0 -15px 20px 0 rgba(223, 199, 12, 0.25)"
				>
					Смотреть
				</Button>
			</Box>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});