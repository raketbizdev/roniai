import {
  Box,
  Container,
  Grid,
  Typography,
  styled
} from '@mui/material';


const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const NextJsAvatar = styled(Box)(
  ({ theme }) => `
  width: ${theme.spacing(8)};
  height: ${theme.spacing(8)};
  border-radius: ${theme.general.borderRadius};
  background-color: #dfebf6;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
    
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
          Roni AI: Simplifying Financial Analysis
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            With Roni AI AI, the future of financial analysis is here. Our cutting-edge AI technology helps you interpret and understand your business's financial statements with incredible simplicity. We turn complicated financial jargon into plain, human language.
          </TypographyH2>
          
    
          <Grid container spacing={3} mt={5}>
            <Grid item md={4}>
              <MuiAvatar>
                <img
                  src="/static/images/logo/material-ui.svg"
                  alt="Material-UI"
                />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Make Informed Decisions, Faster</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                Our intuitive, user-friendly platform provides you with comprehensive financial insights at the click of a button. No more long hours spent on data analysis and report generation. With Roni.AI, you can make informed business decisions quickly and confidently.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4}>
              <NextJsAvatar>
                <img src="/static/images/logo/next-js.svg" alt="NextJS" />
              </NextJsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>Seamless Integration with Your Favorite Tools</b>
                </Box>
                <Typography component="span" variant="subtitle2">
                Roni.AI integrates seamlessly with leading accounting software such as Xero, QuickBooks, and NetSuite. Upload your financial data in various formats, including CSV, Excel, PDF, or directly through API connections.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4}>
              <TsAvatar>
                <img
                  src="/static/images/logo/typescript.svg"
                  alt="Typescript"
                />
              </TsAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                AI-Driven Insights & Visualizations
                </Box>
                <Typography component="span" variant="subtitle2">
                Our platform doesn't just generate detailed financial reports, such as profit and loss statements, balance sheets, and cash flow statements; it also offers actionable recommendations based on data analysis. With customizable, interactive visualizations, you can understand your complex financial data more intuitively.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
