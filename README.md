# gcp-assets
parse gcloud assets export output and save to BQ usingg Dataflow GCS to BQ template

this code parses the output of the following command
gcloud asset export --output-path "gs://$BUCKET/assets.json" --content-type=resource --organization=$ORG_NUMBER
https://cloud.google.com/sdk/gcloud/reference/asset/export

and extracts VM names and OS name

found this after the fact
https://github.com/GoogleCloudPlatform/professional-services/tree/master/tools/asset-inventory

then to get #of os used in the org do:

```SELECT vm_license_name, count(*) FROM `PROJECT.DATASET.vms2` 
where vm_license_name is not null 
group by vm_license_name 
order by 2 desc
```