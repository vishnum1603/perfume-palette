import Box from '@mui/material/Box';

function Overview() {

  const boxes = [
    { text: 'Total Number of Users: ', no: '480', backgroundColor: 'rgb(184, 209, 214)', textColor: 'black' },
    { text: 'Total Number of Fragrances: ', no: '1200', backgroundColor: 'rgb(184, 209, 214)', textColor: 'black' },
    { text: 'Number of Fragrances sold: ', no: '678', backgroundColor: 'rgb(184, 209, 214)', textColor: 'black' },
    { text: 'Number of fragrances in stock: ', no: '522', backgroundColor: 'rgb(184, 209, 214)', textColor: 'black' },
    { text: 'Total Number of Orders: ', no: '512', backgroundColor: 'rgb(184, 209, 214)', textColor: 'black' },
    { text: 'Favorite Fragrances:', no: '98', backgroundColor: 'rgb(184, 209, 214)', textColor: 'black' },
    { text: 'Inventory Quantity: ', no: '30KG', backgroundColor: 'rgb(184, 209, 214)', textColor: 'black' },
    { text: 'Fragrances on Delivery', no: '280', backgroundColor: 'rgb(184, 209, 214)', textColor: 'black' },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {boxes.map((box, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              minWidth: '200px',
              height: '100px',
              margin: '10px',
              borderRadius: '10px',
              backgroundColor: box.backgroundColor,
              boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.5)',
              cursor: 'pointer',
              color: box.textColor,
            }}
          >
            <div>
              <span>{box.text}</span><br />
              <span>{box.no}</span>
            </div>
          </Box>
        ))}
      </div>
    </>
  );
}

export default Overview;
