urls = ("games", "individuals", "playerdetail", "rounds", "standing", "statkey", "teamdetail")
for url in range(len(urls)):
    file_name = "Report_" + urls[url] + ".html"
    #print(file_name)
    with open(file_name, 'r+') as f:
        lines = f.read().split('\n')
        for line in range(len(lines)):
            #print(lines[line])
            for i in range(len(urls)):
                check = "Report_" + urls[i] + ".html"
                if check in lines[line]:
                    repl = "/" + urls[i]
                    lines[line] = lines[line].replace(check, repl);
                    print(lines[line])
    with open(file_name, "w+") as f:
        for line in lines:
            f.write(line + "\n")
