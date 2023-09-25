import React, { useCallback, useEffect, useState } from "react";
import h337 from "heatmap.js";
import styles from "./styles.module.css";

import { getHeatmapData } from "@/services/heatmap.services";

type IHeatmapData = {
  x: number;
  y: number;
  value: number;
};

const DashboardPage: React.FC = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState<boolean>(false);
  const [heatmapData, setHeatmapData] = useState<IHeatmapData[]>([]);

  const handleGetHeatmapData = useCallback(async () => {
    const result = await getHeatmapData("TEST", "click");

    if (result.isOk) {
      const {
        data: { data },
      } = result;

      setHeatmapData(data);
    }
  }, []);

  useEffect(() => {
    handleGetHeatmapData();
  }, [handleGetHeatmapData]);

  useEffect(() => {
    if (!isIframeLoaded || !heatmapData.length) return;

    const element = document.getElementById("heatmap") as HTMLElement;
    // const iframeElement = document.getElementById(
    //   "iframe"
    // ) as HTMLIFrameElement;

    // const iframeContentWindow = iframeElement.contentWindow as Window;
    // const iframeBody = iframeContentWindow.document.body;

    // element.width = 1000;
    // element.clientHeight = 1000;

    // console.log(bodyHeight);
    // console.log(bodyWidth);

    const heatmapInstance = h337.create({
      container: element,
      radius: 50,
      maxOpacity: 0.5,
      minOpacity: 0,
      blur: 0.75,
    });

    console.log(heatmapInstance);

    heatmapInstance.addData(heatmapData);
  }, [heatmapData, isIframeLoaded]);

  return (
    <div id="heatmap" className={styles.container}>
      <iframe
        id="iframe"
        src="http://54.238.188.150/"
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={() => setIsIframeLoaded(true)}
      />
    </div>
  );
};

export default DashboardPage;
