function transformx(line) {

    var json_in = JSON.parse(line);
    var json_out = new Object();

    json_out.name = json_in.name;
    json_out.asset_type = json_in.asset_type;

    if (json_in.asset_type == "compute.googleapis.com/Instance"){

        var name_array = json_in.name.split("/");
        json_out.vm_name = name_array[name_array.length - 1];
        json_out.vm_project = name_array[name_array.length - 5];

        var name_array = json_in.resource.data.disk[0].license[0].split("/");
        json_out.vm_license_name = name_array[name_array.length - 1];

        var jsonString = JSON.stringify(json_out);

        return jsonString;
    }
}