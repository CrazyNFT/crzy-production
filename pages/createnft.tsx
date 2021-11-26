import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import {
  makeStyles,
  createStyles,
  Theme,
  alpha,
  withStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import ImageDropZone from "@/components/ImageDropzone";
// Backend / BlockChain
import { getVoucher, uploadIPFS } from "@/components/LazyMint";
import { v4 as uuidv4 } from "uuid";
import NFT from "../services/models/nft";
import { useCurrency } from "@/context/currencyContext";
const uuidParse = require("uuid").parse;
const ethers = require("ethers");
// Icons
import CloudUploadRounded from "@material-ui/icons/CloudUploadRounded";
import InfoRounded from "@material-ui/icons/InfoRounded";
import CloseOutlined from "@material-ui/icons/CloseOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 800,
      marginBottom: 32,
      textAlign: "center",
    },
    primary: {
      color: theme.palette.primary.main,
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    flexSpaceBetween: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    },
    btnRoot: {
      maxHeight: 54,
      margin: "24px auto",
      "& .MuiToggleButton-root.Mui-selected": {
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
        fontWeight: 800,
        fontSize: 18,
        border: "2px solid",
      },
    },
  })
);

type nftType = "single" | "multiple";

const CustomSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

type NftData = {
  nft: Blob;
  type: "single" | "multiple";
  externalUrl: string;
  title: string;
  description: string;
  royalty: number;
  price: number;
};

export default function CreateNFT(props: any) {
  const classes = useStyles();
  const methods = useForm();
  const router = useRouter();
  const { currency } = useCurrency();
  const { enqueueSnackbar } = useSnackbar();
  const [type, setType] = React.useState<nftType>("single");
  const [value, setValue] = React.useState<number>(30);
  const nftFile = methods.watch("nft");

  const handleNftTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newType: nftType
  ) => {
    setType(newType);
  };

  const handleSliderChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  let convertGuidToInt = (uuid: string) => {
    // parse accountId into Uint8Array[16] variable
    let parsedUuid = uuidParse(uuid);
    // convert to integer - see answers to https://stackoverflow.com/q/39346517/2860309
    let buffer = Buffer.from(parsedUuid);
    let result = buffer.readUInt32BE(0);
    return result;
  };

  const onSubmit = async (data: NftData) => {
    const nftData: NftData = { ...data, type };
    if (!nftData.nft || nftFile == undefined) {
      enqueueSnackbar("No file uploaded!", { variant: "warning" });
      return;
    }

    // No errors - Handle NFT upload
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    const url = await uploadIPFS(nftData.nft);
    let signer = provider.getSigner();
    let acc = window.ethereum.selectedAddress;

    getVoucher(
      convertGuidToInt(uuidv4()),
      url,
      parseInt(nftData.price.toString()),
      signer,
      currency
    ).then(async function (result) {
      const data = {
        title: nftData.title,
        description: nftData.description,
        url: url,
        price: nftData.price,
        royalty: nftData.royalty,
        voucher: result,
      };
      let currentDate = new Date();
      data["createdOn"] = currentDate.toString();
      data["createdBy"] = acc;
      try {
        let nft = new NFT();
        let res = await nft.createNFT(data);
        if (res) {
          enqueueSnackbar("NFT Created successfully!", {
            variant: "success",
          });
          router.push("/marketplace");
        }
      } catch (err) {
        enqueueSnackbar("Error creating NFT", {
          variant: "error",
        });
      }
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Container maxWidth={"md"}>
          <Typography variant="h3" className={classes.title}>
            Create an awesome NFT!
          </Typography>
          <Grid container>
            <Grid item xs={12} style={{ minHeight: 300 }}>
              {!!nftFile ? (
                <div style={{ position: "relative" }}>
                  <IconButton
                    size="small"
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      zIndex: 999,
                    }}
                    onClick={() => methods.setValue("nft", undefined)}
                  >
                    <CloseOutlined style={{ color: "red" }} />
                  </IconButton>
                  <Image
                    src={nftFile.preview}
                    height={1}
                    width={3}
                    layout="responsive"
                    objectFit={"contain"}
                  />
                </div>
              ) : (
                <ImageDropZone name="nft">
                  <CloudUploadRounded
                    style={{ marginBottom: "12px", fontSize: "2rem" }}
                  />
                  <Typography variant="h6" gutterBottom>
                    <b>
                      {"Drag and Drop or "}
                      <span className={classes.primary}>Browse</span>
                    </b>
                  </Typography>
                  <Typography variant="subtitle1">
                    {
                      "Upload a JPEG, PNG, GIF, WEBP, MP4 or MP3 of maximum size 50 Mb."
                    }
                  </Typography>
                </ImageDropZone>
              )}
            </Grid>
            <Grid item xs={12} className={classes.flexCenter}>
              <ToggleButtonGroup
                value={type}
                exclusive
                onChange={handleNftTypeChange}
                className={classes.btnRoot}
              >
                <ToggleButton value="single">{"Single"}</ToggleButton>
                <ToggleButton value="multiple">{"Multiple"}</ToggleButton>
              </ToggleButtonGroup>
              <Alert severity="info">
                <AlertTitle>
                  <b>Choosing your NFT type</b>
                </AlertTitle>
                <Typography variant="body2">
                  Choose <strong>Single</strong> if you want your collectible to
                  be one of a kind or <strong>Multiple</strong> if you want to
                  sell one collectible multiple times
                </Typography>
              </Alert>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            style={{ margin: "24px 0px", transform: "translateX(-16px)" }}
          >
            <Grid item xs={6}>
              <Controller
                name="title"
                defaultValue=""
                control={methods.control}
                rules={{
                  required: "Cool title required",
                }}
                render={({
                  field: { ref, ...rest },
                  fieldState: { error },
                }) => (
                  <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    placeholder="What do you call your collectable?"
                    error={!!error}
                    helperText={!!error && error.message}
                    {...rest}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="externalURL"
                defaultValue=""
                rules={{
                  pattern: {
                    value:
                      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                    message: "Please enter a valid URL",
                  },
                }}
                render={({
                  field: { ref, ...rest },
                  fieldState: { error },
                }) => (
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="External Link"
                    placeholder="Paste URL here"
                    error={!!error}
                    helperText={!!error && error.message}
                    {...rest}
                    InputProps={{
                      endAdornment: (
                        <Tooltip title="CrazyNFT will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.">
                          <InputAdornment position="end">
                            <InfoRounded style={{ color: "lightblue" }} />
                          </InputAdornment>
                        </Tooltip>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                defaultValue=""
                name="description"
                rules={{
                  required: "Breif description required",
                }}
                render={({
                  field: { ref, ...rest },
                  fieldState: { error },
                }) => (
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Describe your collectible"
                    variant="filled"
                    placeholder="We'd love to know what inspired you, when you crafted it and more..."
                    error={!!error}
                    helperText={!!error && error.message}
                    {...rest}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Controller
                name="price"
                defaultValue=""
                rules={{
                  required: "Price required",
                }}
                render={({
                  field: { ref, ...rest },
                  fieldState: { error },
                }) => (
                  <TextField
                    fullWidth
                    label="Price"
                    variant="outlined"
                    placeholder="How much?"
                    error={!!error}
                    helperText={!!error && error.message}
                    inputProps={{
                      type: "number",
                    }}
                    {...rest}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6} className={classes.flexCenter}>
              <div className={classes.flexSpaceBetween}>
                <Typography>Royalties</Typography>
                <Tooltip title="The more the royalty percentage, higher are the chances of your item to be placed on the top of the marketplace list.">
                  <InfoRounded style={{ color: "lightblue" }} />
                </Tooltip>
              </div>
              <Controller
                name="royalty"
                defaultValue=""
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <CustomSlider
                    value={typeof value === "number" ? value : 0}
                    onChange={(e, value) => {
                      const val: number = Number(value);
                      handleSliderChange(e, val);
                      onChange(val);
                    }}
                    aria-labelledby="input-slider"
                  />
                )}
              />
            </Grid>
            <Grid item xs={2} className={classes.flexCenter}>
              <div className={classes.flexSpaceBetween}>
                <Input
                  value={value}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  inputProps={{
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                <Typography variant="h6">
                  <b>CREATE MY AWESOME COLLECTIBLE</b>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
    </FormProvider>
  );
}
