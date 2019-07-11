function transformx(line) {

    var json_in = JSON.parse(line);
    var json_out = new Object();

    json_out.name = json_in.name;
    json_out.asset_type = json_in.asset_type;

    if (json_in.asset_type == "compute.googleapis.com/Instance") {

        var name_array = json_in.name.split("/");
        json_out.vm_name = name_array[name_array.length - 1];
        json_out.vm_project = name_array[name_array.length - 5];

        var data = json_in.resource.data;
        if (data.hasOwnProperty("disk") && Array.isArray(data.disk)) {

            var disk0 = json_in.resource.data.disk[0];
            //console.log("NOT edge case!");

            if (disk0.hasOwnProperty("license")) {
                //console.log("yes");
                var name_array = disk0.license[0].split("/");
                json_out.vm_license_name = name_array[name_array.length - 1];
            } else {
                //console.log("no");
                json_out.source_disk = disk0.source
            }
        } else {
            //console.log("edge case!");
            json_out.edge_case = JSON.stringify(data);
        }

        var jsonString = JSON.stringify(json_out);

        return jsonString;
    }
}