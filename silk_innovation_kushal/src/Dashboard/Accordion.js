import React from 'react'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Chip, Divider, AccordionActions, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Accordian = () => {
    return (
        <div className="accordian">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className="">
              <Typography className="">Location</Typography>
            </div>
            <div className="">
              <Typography className="">Select trip destination</Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails className="">
            <div className="" />
            <div className="">
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
