<template>
  <div class="image-render-container">
    <div ref="image-viewport" id="image-id"></div>
  </div>
</template>

<script>
import * as cornerstone from "cornerstone-core";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneWebImageLoader from "cornerstone-web-image-loader";
import dicomParser from "dicom-parser";
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
export default {
  name: "ImageViewport",
  mounted() {
    var exampleImageId = "dicomweb://localhost:3000/dicom1.dcm";
    console.log("imageids:", exampleImageId);
    var element = document.getElementById("image-id");

    cornerstone.enable(element);

    cornerstone.loadImage(exampleImageId).then(function (image) {
      console.log("加载的图像对象:", image);
      cornerstone.displayImage(element, image);

      // 视口参数
      var viewport = {
        invert: false,
        pixelReplication: false,
        voi: {
          windowWidth: 400,
          windowCenter: 200,
        },
        scale: 1.4,
        translation: {
          x: 0,
          y: 0,
        },
        //colormap: 'hot'
      };

      cornerstone.setViewport(element, viewport);
      cornerstone.updateImage(element);
    });
  },
};
</script>

<style lang="less" scoped>
.image-render-container {
  width: 96vw;
  background-color: #000;
  #image-id {
    width: 96vw;
    height: 95vh;
  }
}
</style>
