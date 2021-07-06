import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Chip, Divider, AccordionActions, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//Material UI Accordion
const Accordian = () => {
    return (
        <div className="accordion">
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
      </div>
    )
}

export default Accordian
