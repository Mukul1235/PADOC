import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

const HorizontalScrollbar = ({data,bodypart,setBodyPart}) => {
  return (
    <ScrollMenu>
          {data.map((item) => (
              <Box
                  key={item.id || item}
                  itemId={item.id || item}
                  title={item.id || item}
                  m='0 40px'
              >
                 
                 <BodyPart item={item}
                      bodypart={bodypart}
                      setBodyPart={setBodyPart}
              />     
          </Box>
          )
          )}
          
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
