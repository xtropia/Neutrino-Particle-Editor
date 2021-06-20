import { useContext } from "react"
import { Select, Input, Typography, Space, Switch } from "antd"

import Panel from "../UIPrimitives/Panel"
import { sortingFns, metaFormats } from "../../hooks/useSettings"
import AxnBtn from "./AxnBtn"
import AppContext from "../../AppContext"
import styles from "../SidePanel/style.css"

const { Text } = Typography
const { Option } = Select

export default () => {
    const { settings: {
        sortingFn,
        metaFormat,
        margin,
        rotationEnabled
    }, updateSettings } = useContext(AppContext)
    return (
        <Panel className={styles.sidePanel}>
            <div>
                <div className={styles.sectionHeader}>
                    Emitter Properties (Global)
                </div>
            <Space direction="vertical">
                    <div>
                        <Space direction="vertical">
                            <Text type="secondary">rect sorting function</Text>
                            <Select value={sortingFn} className={styles.select} onChange={value => updateSettings({ sortingFn: value })} size="large">
                                {sortingFns.map((name, i) => <Option key={i} value={name}>{name}</Option>)}
                            </Select>
                        </Space>
                    </div>
                    <div>
                        <Space direction="vertical">
                            <Text type="secondary">export metadata format</Text>
                            <Select value={metaFormat} className={styles.select} onChange={value => updateSettings({ metaFormat: value })}>
                                {metaFormats.map((name, i) => <Option key={i} value={name}>JSON {name}</Option>)}
                            </Select>
                        </Space>
                    </div>
                    <div>
                        <Space direction="vertical">
                            <Text type="secondary">margin around the sprite</Text>
                            <Space>
                                <Input className={styles.input} addonBefore="x" value={margin.x} addonAfter="px" onChange={e => updateSettings({ margin: { x: Number.parseInt(e.target.value || 0) }})}/>
                                <Input className={styles.input} addonBefore="y" value={margin.y} addonAfter="px" onChange={e => updateSettings({ margin: { y: Number.parseInt(e.target.value || 0) }})}/>
                            </Space>
                        </Space>
                    </div>
                    <div>
                        <Space>
                            <Text type="secondary">Sprite Rotation</Text>
                            <Switch checked={rotationEnabled} onChange={checked => updateSettings({ rotationEnabled: checked })}/>
                        </Space>
                    </div>
                    <AxnBtn />
            </Space>
            </div>
        </Panel>
    )
}