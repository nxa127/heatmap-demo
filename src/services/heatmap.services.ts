import instance from "../axios";

type SaveHeatmapDataParams = {
  pageCode: string;
  endpoint: string;
  x: number;
  y: number;
  value: number;
  type: string;
};

export const saveHeatmapData = async (data: SaveHeatmapDataParams) => {
  try {
    const response = await instance.post("/heatmap/save", { ...data });

    return response.data;
  } catch (error: any) {
    console.log(error);
    return {
      isOk: false,
      message: error?.response?.data?.message,
    };
  }
};

export const getHeatmapData = async (
  pageCode: string,
  type: string = "click"
) => {
  try {
    const response = await instance.get(`/heatmap/${pageCode}?type=${type}`);

    return response.data;
  } catch (error: any) {
    return {
      isOk: false,
      message: error?.response?.data?.message,
    };
  }
};
