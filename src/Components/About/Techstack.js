import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit, DiDigitalOcean, DiAws, DiDocker, DiPython, DiMysql } from "react-icons/di";
import { SiKubernetes, SiAnsible, SiTerraform, } from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiDocker />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiKubernetes />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAnsible />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiTerraform />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
        		<DiMysql />
      		</Col>
			<Col xs={4} md={2} className="tech-icons">
        		<DiAws />
      		</Col>
			<Col xs={4} md={2} className="tech-icons">
        		<DiDigitalOcean />
      		</Col>		
		</Row>
	);
}

export default Techstack;
