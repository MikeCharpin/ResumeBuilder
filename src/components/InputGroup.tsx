type InputGroup = {
    id: string
    placeholder: string
    label:string
    type: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    optional?: boolean
    recommended?: boolean
    "data-key": string
}




export default function InputGroup({
    id,
    placeholder,
    label,
    type,
    value,
    onChange,
    optional,
    recommended,
    "data-key": dataKey
}: InputGroup) {
    return (
        <div className="flex flex-col">
                <div className="flex">
                    <label htmlFor={id} className="text-sm font-semibold flex gap-1 items-end">
                        <span className="text-sm">&nbsp;{label}</span>
                        {optional && <span className="text-xs text-slate-400 ">optional</span>}
                        {recommended && <span className="text-xs text-slate-400">recommended</span>}
                    </label>
                </div>
                {type === "textarea" ? (
                    <textarea
                    className="text-base border border-solid rounded-sm bg-slate-100 px-1"
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    data-key={dataKey}
                    ></textarea>
                ) : (
                    <input
                    className="text-base border border-solid rounded-sm bg-slate-100 px-1"
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    data-key={dataKey}
                    />
                )}
                


            </div>
    )
}