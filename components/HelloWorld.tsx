import SmartWallet from "@/components/SmartWallet";

export default function HelloWorld() {

    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 lg:text-4xl">
                Smart Wallets w/ Coinbase SDK
            </h1>
            <SmartWallet />
        </div>
    )
}