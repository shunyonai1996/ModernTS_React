type MessageProps = {
    children: string,
    color: string,
}

export const ColorfulMessage = (props: MessageProps) => {
    const { children, color } = props;

    type ContentStyle = {
        color: MessageProps["color"],
        fontSize: string
    }

    const contentStyle: ContentStyle = {
        color,
        fontSize: "18px",
    }
    return <p style={contentStyle}>{children}</p>;
}