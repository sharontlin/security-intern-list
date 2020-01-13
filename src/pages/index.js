import React from "react"
import { Link } from "gatsby"
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Card, Box, Columns } from 'react-bulma-components';
import "./styles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import companies from '../static/data.js';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Security Intern List" />
      {companies.map((node, index) => (
        <Box>
          <Columns>
            <Columns.Column>
              <strong>{node[0]}</strong>
            </Columns.Column>
            <Columns.Column size={6}> 
             {node[2]}
            </Columns.Column>
            <Columns.Column offset={2}> 
            <a href={node[1]}><Button color="info" renderAs="span">Apply</Button></a>
            </Columns.Column>
          </Columns>
        </Box>
      ))} 
  </Layout>
  )}

export default IndexPage