import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AddAPhoto } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import { AiOutlineClose } from "react-icons/ai";
import BrandFilter from "./BrandFilter";

const BuyCarSearchFilter = (props) => {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [expandAll, setExpandAll] = useState(false);
  const { setCarListing, setLoading, filterUrl } = props;
  const [value, setValue] = useState([100000, 2400000]);
  // use for filters
  const [fields, setFields] = useState({
    min_price: 100000,
    max_price: 2400000,
    owner: "",
    year: "",
    km: "",
    type: "",
    model: [],
  });

  // const handleChange = (panel) => (event, isExpanded) => {
  //     setExpanded(isExpanded ? panel : false);
  // };

  const [marks, setMarks] = useState([
    {
      value: 200000,
      label: "MIN",
    },
    {
      value: 2400000,
      label: "MAX",
    },
  ]);

  const HandleSlider = async (e) => {
    const range = e.target.value;
    if (range[0] < range[1] - 100000 && range[1] > range[0] + 100000) {
      setValue(range);
    }
  };

  const fetchFilter = async () => {
    setLoading(true);
    const resdata = await fetch(filterUrl, {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-type": "application/json",
      },
    });
    const jsonData = await resdata.json();
    // console.log(jsonData, "filter result")
    if (jsonData.code == 200) {
      setLoading(false);
      setCarListing(jsonData.data.auction);
    }
  };

  const HandleSiderValueChanged = async () => {
    setFields({ ...fields, min_price: value[0], max_price: value[1] });
  };

  useEffect(() => {
    fetchFilter();
  }, [fields]);

  const HandleFilters = async (e) => {
    const { name } = e.target;
    const filterValue = e.target.value;
    const filterData = { ...fields, [name]: filterValue };
    setFields(filterData);
  };

  const HandleSearch = (e) => {
    setSearchQuerry(e.target.value);
    if ((e.target.value = "")) {
      setExpandAll(false);
    } else {
      setExpandAll(true);
    }
  };

  return (
    <>
      <div className="p-4">
        <div className="mb-2">
          <div className="flex justify-between">
            {/* <h6>Filters</h6> */}
            <button
              className="text-sm cursor-pointer border-orange-500 border text-orange-500 hover:text-white hover:bg-orange-500 py-1 px-2 rounded-lg"
              onClick={() => {
                setValue([100000, 2400000]);
                setFields({
                  min_price: 100000,
                  max_price: 2400000,
                  owner: "",
                  year: "",
                  km: "",
                  type: "",
                  brand: "",
                });
              }}>
              Clear All
            </button>

            {/* save  button */}
            {/* <button
              className="text-sm cursor-pointer border-orange-500 border bg-orange-500 text-white hover:text-orange-500 hover:bg-white py-1 px-2 rounded-lg"
              onClick={() => {
                setValue([100000, 2400000]);
                setFields({ ...fields, min_price: 100000, max_price: 2400000 });
              }}
            >
              Save
            </button> */}
          </div>
          <h3 className="text-xl text-[#000] font-black my-2 font-inter">
            Make & Model
          </h3>

          <div className="mx-auto w-12/12 mt-4">
            <input
              placeholder="Search Cars..."
              onChange={(e) => {
                HandleSearch(e);
              }}
              value={searchQuerry}
              className="outline-[#999999] border w-full px-2 text-black/70 border-[#999999] p-1 rounded"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {value[0] != 100000 || value[1] != 2400000 ? (
              <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
                {value[0]}-{value[1]}
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setValue([100000, 2400000]);
                    setFields({
                      ...fields,
                      min_price: 100000,
                      max_price: 2400000,
                    });
                  }}>
                  <AiOutlineClose />
                </div>
              </div>
            ) : (
              <></>
            )}
            {fields.owner != "" ? (
              <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
                Ownership: {fields.owner}
                <div
                  className="cursor-pointer"
                  onClick={() => setFields({ ...fields, owner: "" })}>
                  <AiOutlineClose />
                </div>
              </div>
            ) : (
              <></>
            )}
            {fields.km != "" ? (
              <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
                {fields.km}
                <div
                  className="cursor-pointer"
                  onClick={() => setFields({ ...fields, km: "" })}>
                  <AiOutlineClose />
                </div>
              </div>
            ) : (
              <></>
            )}
            {fields.year != "" ? (
              <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
                {fields.year}
                <div
                  className="cursor-pointer"
                  onClick={() => setFields({ ...fields, year: "" })}>
                  <AiOutlineClose />
                </div>
              </div>
            ) : (
              <></>
            )}
            {fields.type != "" ? (
              <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
                {fields.type}
                <div
                  className="cursor-pointer"
                  onClick={() => setFields({ ...fields, type: "" })}>
                  <AiOutlineClose />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="text-sm">
          <Accordion
            className="my-2"
            defaultExpanded={true}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <h6 className="text-sm font-semibold font-inter">₹ Budget</h6>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="justify-between flex">
                  <h2 className="text-xs bg-sky-500 text-white/100 p-1 rounded-md font-inter">
                    ₹ {value[0]}
                  </h2>
                  <h2 className="text-xs bg-green-500	text-white/100 p-1 rounded-md font-inter">
                    ₹ {value[1]}
                  </h2>
                </div>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }}>
                  <Slider
                    value={value}
                    step={25000}
                    valueLabelDisplay="auto"
                    onClick={(e) => {
                      console.log(e);
                    }}
                    marks={marks}
                    onChange={(e) => {
                      HandleSlider(e);
                    }}
                    color="warning"
                    min={100000}
                    onChangeCommitted={HandleSiderValueChanged}
                    max={2500000}
                    size="medium"
                  />
                </Stack>
              </div>
            </AccordionDetails>
          </Accordion>

          <BrandFilter setFields={setFields} fields={fields} />

          <Accordion
            className="my-2 shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className="text-sm font-semibold">Ownership</h6>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="owner"
                onChange={(e) => {
                  HandleFilters(e);
                }}
                className="text-xs"
                sx={{
                  ".MuiFormControlLabel-label": { fontSize: "14px !important" },
                }}>
                <FormControlLabel
                  value="1"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.owner == "1"}
                    />
                  }
                  label="1st Owner"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.owner == "2"}
                    />
                  }
                  label="2nd Owner"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.owner == "3"}
                    />
                  }
                  label="3rd Owner"
                />
                <FormControlLabel
                  value="4"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.owner == "4"}
                    />
                  }
                  label="4th Owner"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="my-2 shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className="text-sm font-semibold">Year</h6>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="year"
                className=""
                onChange={(e) => {
                  HandleFilters(e);
                }}
                sx={{
                  ".MuiFormControlLabel-label": { fontSize: "14px !important" },
                }}>
                <FormControlLabel
                  value="2022"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2022"}
                    />
                  }
                  label="2022"
                />
                <FormControlLabel
                  value="2021"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2021"}
                    />
                  }
                  label="2021"
                />
                <FormControlLabel
                  value="2020"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2020"}
                    />
                  }
                  label="2020"
                />
                <FormControlLabel
                  value="2019"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2019"}
                    />
                  }
                  label="2019"
                />
                <FormControlLabel
                  value="2018"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2018"}
                    />
                  }
                  label="2018"
                />
                <FormControlLabel
                  value="2017"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2017"}
                    />
                  }
                  label="2017"
                />
                <FormControlLabel
                  value="2016"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2016"}
                    />
                  }
                  label="2016"
                />
                <FormControlLabel
                  value="2015"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2015"}
                    />
                  }
                  label="2015"
                />
                <FormControlLabel
                  value="2014"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2014"}
                    />
                  }
                  label="2014"
                />
                <FormControlLabel
                  value="2013"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2013"}
                    />
                  }
                  label="2013"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="my-2 shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className="text-sm font-semibold">KM Driven</h6>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="km"
                onChange={(e) => {
                  HandleFilters(e);
                }}
                sx={{
                  ".MuiFormControlLabel-label": { fontSize: "14px !important" },
                }}>
                <FormControlLabel
                  value="4000"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.km == "4000"}
                    />
                  }
                  label="4000 and less"
                />
                <FormControlLabel
                  value="5000"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.km == "5000"}
                    />
                  }
                  label="5000 and less"
                />
                <FormControlLabel
                  value="6000"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.km == "6000"}
                    />
                  }
                  label="6000 and less"
                />
                <FormControlLabel
                  value="7000"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.km == "7000"}
                    />
                  }
                  label="7000 and less"
                />
                <FormControlLabel
                  value="8000"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.km == "8000"}
                    />
                  }
                  label="8000 and less"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="my-2 shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className="text-sm font-semibold font-inter">Fuel Type</h6>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="type"
                onChange={(e) => {
                  HandleFilters(e);
                }}
                sx={{
                  ".MuiFormControlLabel-label": { fontSize: "14px !important" },
                }}>
                <FormControlLabel
                  value="petrol"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.type == "petrol"}
                    />
                  }
                  label="Petrol"
                />
                <FormControlLabel
                  value="diesel"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.type == "diesel"}
                    />
                  }
                  label="Diesel"
                />
                <FormControlLabel
                  value="cng"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.type == "cng"}
                    />
                  }
                  label="CNG"
                />
                <FormControlLabel
                  value="petrol_cng"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.type == "petrol_cng"}
                    />
                  }
                  label="Petrol + CNG"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default BuyCarSearchFilter;
