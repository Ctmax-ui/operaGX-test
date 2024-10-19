import React, { useEffect, useState } from "react";
import useMediaFetcher from "../../hooks/useMediaFetcher";

const DailyNews = () => {
  const [targetCountry, setTargetCountry] = useState("in");
  const [targetLanguage, setTargetLanguage] = useState("en-US");
  const [targetLocale, setTargetLocale] = useState('en_IN');
  const [targetCategory, setTargetCategory] = useState('en');
  const [targetTimezone, setTargetTimezone] = useState("+05:00");
  const [] = useState();

  const { fetchedData } = useMediaFetcher(
    `https://thingproxy.freeboard.io/fetch/https://speeddials.opera.com/api/v3/news?country=${targetCountry}&language=${targetLanguage}&locale=${targetLocale}&category=${targetCategory}&timezone=${targetTimezone}`,
    "get"
  );

  useEffect(()=>{
    console.log(fetchedData);
  },[fetchedData])

  return <></>;
};

export default DailyNews;
