<template>
  <ejs-diagram :width="width" :height="height" :dataSourceSettings="dataSourceSettings" :layout="layout"
    :getNodeDefaults="getNodeDefaults" :getConnectorDefaults="getConnectorDefaults"></ejs-diagram>
</template>
<script>

import {
  DiagramComponent,
  DataBinding,
  MindMap
} from '@syncfusion/ej2-vue-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
import { mindMapData } from './data.js';

export default {
  components: {
    'ejs-diagram': DiagramComponent
  },
  data: function () {
    return {
      width: '1502px',
      height: '702px',
      layout: {
        type: 'MindMap',
        horizontalSpacing: 40,//50,
        orientation: 'Vertical'
      },
      dataSourceSettings: {
        dataSource: new DataManager(mindMapData),
        id: 'id',
        parentId: 'parentId'
      },
      getNodeDefaults: (node) => {
        node.annotations = [{ content: node.data.Label, style: { color: 'white' } }];
        node.height = 40;
        node.width = 110;
        /* node.ports = [
          { id: "port1", offset: { x: 0, y: 0.5 }, },
          { id: "port2", offset: { x: 1, y: 0.5 }, }
        ]; */
        node.ports = [
          { id: "port1", offset: { y: 0, x: 0.5 }, },
          { id: "port2", offset: { y: 1, x: 0.5 }, }
        ];
        node.expandIcon = { shape: 'Minus'},
        node.collapseIcon = {shape: 'Plus'}

        const branch = node.data.branch;
        if (branch === 'Root' || branch === "Left" || branch === "Right") {
          node.shape = branch !== 'Root' ? { type: 'Basic', shape: 'Ellipse' } : { type: 'Path', data: 'M55.7315 17.239C57.8719 21.76 54.6613 27.788 47.1698 26.0787C46.0997 32.309 33.2572 35.323 28.9764 29.2951C25.7658 35.323 10.7829 33.816 10.7829 26.0787C3.29143 30.802 -0.989391 20.253 2.22121 17.239C-0.989317 14.2249 2.22121 6.68993 10.7829 8.39934C13.9935 -0.845086 25.7658 -0.845086 28.9764 5.18301C32.187 0.661909 45.0294 0.661908 47.1698 8.39934C52.5209 5.18301 60.0123 12.7179 55.7315 17.239Z' }
          node.style = { fill: branch !== 'Root' ? '#F39C12' : '#E74C3C', strokeWidth: 0 }
        }
        else {
          node.style = { fill: branch === "subRight" ? "#8E44AD" : "#3498DB", strokeWidth: 0 }
        }
      },
      getConnectorDefaults: (connector, diagram) => {
        connector.type = 'Bezier';
        connector.targetDecorator = { shape: 'None' };
        let sourceNode = diagram.getObject(connector.sourceID);
        let targetNode = diagram.getObject(connector.targetID);
        const branch = targetNode.data.branch;

        if(branch === 'Right' || branch === 'subRight'){
          connector.sourcePortID = sourceNode.ports[1].id;
          connector.targetPortID = targetNode.ports[0].id;
          connector.style = { strokeWidth: 3, strokeColor: "#8E44AD" };
        }
        else if (branch === "Left" || branch === "subLeft") {
            connector.sourcePortID = sourceNode.ports[0].id;
            connector.targetPortID = targetNode.ports[1].id;
            connector.style = { strokeWidth: 3, strokeColor: "#3498DB" };
          }
    }
    };
  },
  provide: { diagram: [DataBinding, MindMap] }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/material.css";
</style>