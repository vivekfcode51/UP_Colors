import no_data_available from "../../assets/images/no_data_available.png"
function InvitationRecord() {
    return (
        <div className="px-3">
            <img className="mt-10" src={no_data_available} alt="ds" />
            <p className="text-center mt-10">No Data</p>
        </div>
    )
}

export default InvitationRecord