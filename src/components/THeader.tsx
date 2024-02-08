import { pricesType } from "../types/app";
import { HeadersType} from "../types/assets"; //prettier-ignore
import { Thead, Tr, Th } from "@chakra-ui/react";

function THeader({
    headers,
    selectedHeader,
    handleSort,
    prices,
}: {
    headers: HeadersType;
    selectedHeader: string;
    handleSort: (name: string, prices: pricesType) => void;
    prices: pricesType
}) {
    return (
        <Thead>
            <Tr className="border-2 border-zinc-900">
                {headers.map((name, idx) => (
                    <Th
                        color={"white"}
                        key={idx}
                        onClick={() => handleSort(name, prices)}
                        className={`cursor-pointer hover:bg-zinc-900 transition duration-200 ${
                            selectedHeader == name
                                ? "bg-zinc-700"
                                : selectedHeader == name + 1 && "bg-zinc-700"
                        }`}>
                        <div className="flex items-center justify-between">
                            {name}
                            {selectedHeader == name ? (
                                <i className="fa-solid fa-arrow-down-short-wide"></i>
                            ) : (
                                selectedHeader == name + 1 && (
                                    <i className="fa-solid fa-arrow-up-wide-short"></i>
                                )
                            )}
                        </div>
                    </Th>
                ))}
            </Tr>
        </Thead>
    );
}

export default THeader;
