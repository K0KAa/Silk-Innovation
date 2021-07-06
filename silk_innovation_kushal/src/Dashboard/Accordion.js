import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Chip, Divider, AccordionActions, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from "styled-components"
//Material UI Accordion
const Accordian = () => {
    return (
        <AccordionWrapper>
          <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div>
                    <Typography>Location</Typography>
                </div>
                <div>
                    <Typography>Select trip destination</Typography>
                </div>

                </AccordionSummary>
                <AccordionDetails>

                <div>
                    <Chip label="Barbados" onDelete={() => {}} />
                </div>

                <div className="">
                  <Typography variant="caption">
                        Select your destination of choice
                        <br />
                        <a href="#secondary-heading-and-columns" className="">
                            Learn more
                        </a>
                  </Typography>
                </div>
              </AccordionDetails>
              <Divider />
              <AccordionActions>
                  <Button size="small">Cancel</Button>
                  <Button size="small" color="primary">
                      Save
                  </Button>
              </AccordionActions>
          </Accordion>
      </AccordionWrapper>
    )
}

export default Accordian


const AccordionWrapper = styled.div`
    box-shadow: 10px -1px 27px -2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px -1px 27px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px -1px 27px -2px rgba(0,0,0,0.75);
`;