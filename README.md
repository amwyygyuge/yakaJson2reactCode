## 安装
```
npm install yaka-json-to-react-code --save

```
or
```
yarn add yaka-json-to-react-code
```


## 示例

demo.json
```json
{
    "name": "lalala",
    "yakaConfig": {
        "name": "home",
        "init": {
            "formValue": {
                "bumen": "2",
                "name": "1000",
                "checkbox": [
                    "Pear"
                ],
                "numbeer": "demo",
                "switch": false
            },
            "state": {
                "demo": "ddddddd",
                "arr": [
                    {
                        "label": "1111"
                    }
                ]
            },
            "functions": {
                "getItem": {
                    "type": "yakaFetch",
                    "definition": {
                        "headers": {
                            "aa": "@data",
                            "state": "$demo",
                            "string": "string"
                        },
                        "type": "restful",
                        "url": "http://xingyang.com/re/localdns",
                        "params": {
                            "demo": "$arr[0].label",
                            "test": "#name"
                        },
                        "streams": {
                            "$bumen.options": {
                                "path": "data.org",
                                "alias": {
                                    "label": "label",
                                    "value": "value"
                                }
                            },
                            "$test.options": "data.org"
                        }
                    }
                },
                "titleChange": {
                    "type": "stream",
                    "definition": {
                        "$title": "target.value",
                        "#sename": "target.value"
                    }
                },
                "log": {
                    "type": "log",
                    "definition": {
                        "text": "自定义代码模板"
                    }
                }
            },
            "watch": {
                "title": {
                    "run": "testWatch"
                },
                "subTitle": {
                    "run": "log"
                }
            },
            "event": {
                "demo": {
                    "onCLick": "#buttonCLick"
                }
            }
        },
        "layout": [
            {
                "ele": "Row",
                "subs": [
                    {
                        "col": 24,
                        "ele": "h1",
                        "text": "$dadwada",
                        "hide": true,
                        "props": {
                            "style": {
                                "textAlign": "center"
                            }
                        }
                    }
                ]
            },
            {
                "ele": "Row",
                "subs": [
                    {
                        "col": 24,
                        "ele": "Card",
                        "props": {
                            "title": "日志系统服务器采购申请"
                        },
                        "subs": [
                            {
                                "name": "form",
                                "ele": "Form",
                                "props": {
                                    "colWidth": 8,
                                    "labelCol": 8,
                                    "wrapperCol": 16,
                                    "gutter": 30
                                },
                                "subs": [
                                    {
                                        "name": "name",
                                        "label": "申请人",
                                        "ele": "Input",
                                        "props": {
                                            "onChange": "*titleChange"
                                        },
                                        "rules": [
                                            {
                                                "required": true,
                                                "message": "请填写申请人"
                                            }
                                        ]
                                    },
                                    {
                                        "name": "sename",
                                        "label": "受控表单",
                                        "ele": "Input",
                                        "props": {
                                            "onChange": "*log"
                                        }
                                    },
                                    {
                                        "name": "bumen",
                                        "label": "申请需求部门",
                                        "ele": "Select",
                                        "props": {
                                            "options": "$bumen.options",
                                            "onChange": "*getItem"
                                        }
                                    },
                                    {
                                        "name": "date",
                                        "label": "需求交付时间",
                                        "ele": "DatePicker"
                                    },
                                    {
                                        "name": "numbeer",
                                        "label": "数量",
                                        "ele": "Input"
                                    },
                                    {
                                        "name": "radio",
                                        "label": "单选",
                                        "ele": "Radio",
                                        "props": {
                                            "mode": "dadwa",
                                            "moded": 1000,
                                            "modesdaw": true,
                                            "options": [
                                                {
                                                    "label": "Apple",
                                                    "value": "Apple"
                                                },
                                                {
                                                    "label": "Pear",
                                                    "value": "Pear"
                                                },
                                                {
                                                    "label": "Orange",
                                                    "value": "Orange",
                                                    "disabled": false
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "name": "checkbox",
                                        "label": "多选",
                                        "ele": "Checkbox",
                                        "props": {
                                            "options": [
                                                {
                                                    "label": "Apple",
                                                    "value": "Apple"
                                                },
                                                {
                                                    "label": "Pear",
                                                    "value": "Pear"
                                                },
                                                {
                                                    "label": "Orange",
                                                    "value": "Orange",
                                                    "disabled": false
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "name": "time",
                                        "label": "需求具体时间",
                                        "ele": "TimePicker"
                                    },
                                    {
                                        "name": "switch",
                                        "label": "开关",
                                        "ele": "Switch"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "ele": "Row",
                "subs": [
                    {
                        "col": 24,
                        "ele": "Card",
                        "props": {
                            "title": "@data",
                            "style": {
                                "padding": 10
                            }
                        },
                        "subs": [
                            {
                                "ele": "Table",
                                "props": {
                                    "dataSource": [
                                        {
                                            "key": "1",
                                            "name": "胡彦斌",
                                            "age": 32,
                                            "address": "西湖区湖底公园1号"
                                        },
                                        {
                                            "key": "2",
                                            "name": "胡彦祖",
                                            "age": 42,
                                            "address": "西湖区湖底公园1号"
                                        }
                                    ],
                                    "columns": [
                                        {
                                            "title": "姓名",
                                            "dataIndex": "name"
                                        },
                                        {
                                            "title": "年龄",
                                            "dataIndex": "age"
                                        },
                                        {
                                            "title": "住址",
                                            "dataIndex": "address"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "ele": "Row",
                "subs": [
                    {
                        "col": 24,
                        "ele": "Card",
                        "props": {
                            "title": "@data"
                        },
                        "subs": [
                            {
                                "name": "edit",
                                "ele": "Editor",
                                "rules": [
                                    {
                                        "required": true,
                                        "message": "请填写申请人"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "ele": "Row",
                "subs": [
                    {
                        "col": 24,
                        "ele": "Card",
                        "props": {
                            "title": "申请资源的详细信息",
                            "style": {
                                "padding": 10
                            }
                        },
                        "subs": [
                            {
                                "name": "editTable",
                                "ele": "EditTable",
                                "props": {
                                    "value": [
                                        {
                                            "serverType": "",
                                            "serverNum": 1,
                                            "serverTarget": "1",
                                            "serverUseNode": 1,
                                            "os": true,
                                            "other": 1,
                                            "key": 1
                                        }
                                    ],
                                    "columns": [
                                        {
                                            "title": "服务器机型",
                                            "ele": "Input",
                                            "name": "serverType",
                                            "rules": [
                                                {
                                                    "required": true,
                                                    "message": "请填写InputNumber"
                                                }
                                            ]
                                        },
                                        {
                                            "title": "服务器数量",
                                            "ele": "InputNumber",
                                            "name": "serverNum",
                                            "rules": [
                                                {
                                                    "required": true,
                                                    "message": "请填写服务器数量"
                                                }
                                            ]
                                        },
                                        {
                                            "title": "服务器用途",
                                            "name": "serverTarget",
                                            "ele": "Select",
                                            "props": {
                                                "options": "$bumen.options"
                                            }
                                        },
                                        {
                                            "title": "服务器使用节点",
                                            "ele": "Input",
                                            "name": "serverUseNode"
                                        },
                                        {
                                            "title": "操作系统要求",
                                            "ele": "Switch",
                                            "name": "os"
                                        },
                                        {
                                            "title": "其他需求",
                                            "ele": "Input",
                                            "name": "other"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "mounted": {
            "run": {
                "demo": {
                    "param": 10000
                },
                "getItem": {},
                "log": {
                    "param": "dadwa"
                }
            }
        }
    },
    "functionTemplates": {
        "shit": "(data, api) => {\n                const { getState, formValueSettingFunction, stateValueSettingFunction } = api\n                formValueSettingFunction({ sename: \"测试数据\" })\n                stateValueSettingFunction({\n                    title: {\n                        value: \"测试数据\"\n                    }\n                })\n            }",
        "demo": "(data, api) => {\n                const { getState, formValueSettingFunction, stateValueSettingFunction } = api\n                formValueSettingFunction({ sename: \"测试数据\" })\n                stateValueSettingFunction({\n                    title: {\n                        value: \"测试数据\"\n                    }\n                })\n            }"
    },
    "mountFunctions": {
        "shit": "(data, api) => {\n                const { getState, formValueSettingFunction, stateValueSettingFunction } = api\n                formValueSettingFunction({ sename: \"测试数据\" })\n                stateValueSettingFunction({\n                    title: {\n                        value: \"测试数据\"\n                    }\n                })\n            }",
        "demo": "(data, api) => {\n                const { getState, formValueSettingFunction, stateValueSettingFunction } = api\n                formValueSettingFunction({ sename: \"测试数据\" })\n                stateValueSettingFunction({\n                    title: {\n                        value: \"测试数据\"\n                    }\n                })\n            }"
    }
}

```
使用
```js
import yakaJsonToReactCode from 'yaka-json-to-react-code'
import demo from './../demo.json';
const data = yakaJsonToReactCode(demo)
console.log(data.getData());
```

转换后的jsx文件

```jsx
    import React, { Component } from "react";
    import {
      Row,
      Card,
      Form,
      Input,
      Select,
      DatePicker,
      Radio,
      Checkbox,
      TimePicker,
      Switch,
      Card,
      Table,
      Card,
      Editor,
      Card,
      EditTable
    } from "igroot";
    import { shit, demo } from "lalala_mountFunction.js";
    import { shit, demo } from "lalala_functionTemplate.js";
    class lalala extends Component {
      constructor() {
        super();
        this.state = { demo: "ddddddd", arr: [{ label: "1111" }] };
        this.shit = shit.bind(this);
        this.demo = demo.bind(this);
      }

      componentDidMount() {
        this.initFormValue();
        this.runMountedFunc();
      }

      initFormValue = () => {
        const { setFieldsValue } = this.props.form;
        setFieldsValue({
          bumen: "2",
          name: "1000",
          checkbox: ["Pear"],
          numbeer: "demo",
          switch: false
        });
      };

      runMountedFunc = () => {
        this.demo({ param: 10000 });
        this.getItem({});
        this.log({ param: "dadwa" });
      };

      render() {
        const { dadwada, bumen } = this.state;
        return (
          <div>
            <Row>
              <h1 style={{ textAlign: "center" }}>{dadwada}</h1>
            </Row>
            <Row>
              <Card title="日志系统服务器采购申请">
                <Form colWidth={8} labelCol={8} wrapperCol={16} gutter={30}>
                  <Input onChange={this.titleChange} />
                  <Input onChange={this.log} />
                  <Select options={bumen.options} onChange={this.getItem} />
                  <DatePicker />
                  <Input />
                  <Radio
                    mode="dadwa"
                    moded={1000}
                    modesdaw={true}
                    options={[
                      { label: "Apple", value: "Apple" },
                      { label: "Pear", value: "Pear" },
                      { label: "Orange", value: "Orange", disabled: false }
                    ]}
                  />
                  <Checkbox
                    options={[
                      { label: "Apple", value: "Apple" },
                      { label: "Pear", value: "Pear" },
                      { label: "Orange", value: "Orange", disabled: false }
                    ]}
                  />
                  <TimePicker />
                  <Switch />
                </Form>
              </Card>
            </Row>
            <Row>
              <Card title={data} style={{ padding: 10 }}>
                <Table
                  dataSource={[
                    {
                      key: "1",
                      name: "胡彦斌",
                      age: 32,
                      address: "西湖区湖底公园1号"
                    },
                    {
                      key: "2",
                      name: "胡彦祖",
                      age: 42,
                      address: "西湖区湖底公园1号"
                    }
                  ]}
                  columns={[
                    { title: "姓名", dataIndex: "name" },
                    { title: "年龄", dataIndex: "age" },
                    { title: "住址", dataIndex: "address" }
                  ]}
                />
              </Card>
            </Row>
            <Row>
              <Card title={data}>
                <Editor />
              </Card>
            </Row>
            <Row>
              <Card title="申请资源的详细信息" style={{ padding: 10 }}>
                <EditTable
                  value={[
                    {
                      serverType: "",
                      serverNum: 1,
                      serverTarget: "1",
                      serverUseNode: 1,
                      os: true,
                      other: 1,
                      key: 1
                    }
                  ]}
                  columns={[
                    {
                      title: "服务器机型",
                      ele: "Input",
                      name: "serverType",
                      rules: [{ required: true, message: "请填写InputNumber" }]
                    },
                    {
                      title: "服务器数量",
                      ele: "InputNumber",
                      name: "serverNum",
                      rules: [{ required: true, message: "请填写服务器数量" }]
                    },
                    {
                      title: "服务器用途",
                      name: "serverTarget",
                      ele: "Select",
                      props: { options: "$bumen.options" }
                    },
                    {
                      title: "服务器使用节点",
                      ele: "Input",
                      name: "serverUseNode"
                    },
                    { title: "操作系统要求", ele: "Switch", name: "os" },
                    { title: "其他需求", ele: "Input", name: "other" }
                  ]}
                />
              </Card>
            </Row>
          </div>
        );
      }
    }

    export default lalala;
```

