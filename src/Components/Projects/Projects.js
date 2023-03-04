import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import cacti from "../../Assets/Projects/cacti.png";
import skype from "../../Assets/Projects/skype.png";
import zabbix from "../../Assets/Projects/zabbix.png";
function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={skype}
							isBlog={false}
							title="HELM"
							description="This Chart is for skypeapi server deploy on Kubernetes."
							techstack="HELM | K8s"
							git="https://github.com/waiiphyo/helm-skype.git"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={zabbix}
							isBlog={false}
							title="Zabbix Automation"
							description="This Project is auto install zabbix server with ansible playbook."
							techstack="Ansible"
							git="https://github.com/waiiphyo/zabbix-automation/"
						/>
					</Col>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={cacti}
							isBlog={false}
							title="Cacti Automation"
							description="This Project is auto install cacti server with bash scripting."
							techstack="Bash"
							git="https://github.com/waiiphyo/cacti-auto-install.git"
						/>
					</Col>

				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
